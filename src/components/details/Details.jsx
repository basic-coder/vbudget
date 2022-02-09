import React from 'react';
import {Card, CardHeader, CardContent, Typography} from '@material-ui/core';
import {
  Chart,
  ArcElement,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Legend,
  Title,
  Tooltip,
  Filler,
} from "chart.js";
import { Doughnut } from 'react-chartjs-2';
import useTransactions from '../../hooks/useTransactions';
import useStyles from './style'
Chart.register(
  ArcElement,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Legend,
  Title,
  Tooltip,
  Filler,
);

const Details = ({title}) => {
    const classes = useStyles();
    const {total, chartData} = useTransactions(title);
  return (
  <Card className={title === 'Income' ? classes.income : classes.expense}>
      <CardHeader title={title} />
      <CardContent>
              <Typography variant='h5'>{total}</Typography>

              <Doughnut data={chartData} />
          </CardContent>
  </Card>
  )
};

export default Details;
