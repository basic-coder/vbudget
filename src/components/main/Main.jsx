import React from 'react';
import {Card,CardHeader,CardContent,Grid, Divider, Typography} from '@material-ui/core';
import useStyles from './style';
import Form from './form/Form';
import List from './list/List';
import { useContext } from 'react';
import { ExpenseTrackerContext } from '../../context/context';

const Main = () => {
    const classes = useStyles();
    const {balance} = useContext(ExpenseTrackerContext)
  return (
  <Card className={classes.react}>
    <CardHeader title='Expense Tracker' subheader='Powered by Speechly' />
    <CardContent>
        <Typography align='center' variant='h5'>Total Balance ₹{balance}</Typography>
        <Typography variant='subtitle2' style={{lineHeight: '1.5em', marginTop:'20px'}}>
            {/* try saying */}
        </Typography>
        <Divider className={classes.divider} />
        <Form />
    </CardContent>
    <CardContent className={classes.cardContent}>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <List />
            </Grid>
        </Grid>
    </CardContent>
  </Card>
  )
};

export default Main;
