import React, { useState,useEffect,useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MainBlogAdd from './MainBlogAdd';
import MainIndex from './MainIndex';
import firebase from 'firebase';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
  flexGrow: 1,
  },
  from: {
  '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
  },
  },
  table: {
  minWidth: 650,
  },
  paper: {
  padding: theme.spacing(3),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height:'130%'
  },
}));

export default function FullWidthGrid() {

  const [values,setValues] = useState({
    datas:[],
    title:"",
    body:""
  });

  const [isChangedbookers, setIsChangedbookers] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  const db = firebase.firestore();

  const handleSubmit = (event) => {
    event.preventDefault();
    setValues({
      datas:[
        ...values.datas,
        {
          title:values.title,
          body:values.body,
        }
      ],
      title:"",
      body:""
    })
    setIsChangedbookers(true);
  };

  const reset = () => {
      setValues({
      datas:values.datas,
      title:"",
      body:""
    });
  };

  const bookerDelete = (i) =>{
    setValues({
      datas:values.datas.filter((_, idx) => idx !== i),
      title:"",
      body:""
    });
    setIsChangedbookers(true);
  }

  // 初回ロード時にデータを取得
  useEffect(() => {
    (async () => {
      const resTodo = await db.collection("bookerList").doc("booker").get();
      // stateに入れる
      const bookersdats = resTodo.data().bookers;
      setValues({
        datas:bookersdats,
        title:"",
        body:""
      });
      // Loading終了
      setIsLoading(false);
    })()
  }, [db])
  
  // 登録、削除機能が動いた時の処理
  useEffect(() => {
    if (isChangedbookers) {
      (async () => {
        // 通信をするのでLoadingをtrue
        setIsLoading(true)
        const docRef = await db.collection('bookerList').doc('booker');
        docRef.update({ bookers: values.datas })
        // Loading終了
        setIsLoading(false)
      })()
    }
  }, [values.datas, isChangedbookers, db])

  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Grid container spacing={0}>
            <Grid item xs={12} sm={3}>
            <Paper className={classes.paper}>
              <h3>Blog投稿</h3>
              <MainBlogAdd style={classes} setValues={setValues} handleSubmit={handleSubmit} values={values} reset={reset} />
            </Paper>
            </Grid>
            <Grid item xs={12} sm={9}>
            <Paper className={classes.paper}>
              <h3>Blog一覧</h3>
              <MainIndex style={classes} data={values} bookerDelete={bookerDelete}/>
            </Paper>
            </Grid>
        </Grid>
    </div>
  );
}
