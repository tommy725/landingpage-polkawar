import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';

import React from 'react';

import cardFrame from '../../assets/card.png';
import sword from '../../assets/sword.png';
import bigknife from '../../assets/bigknife.png';
import tessen from '../../assets/tessen.png';
import bow from '../../assets/bow.png';
import gun from '../../assets/gun.png';
import sceptre from '../../assets/sceptre.png';
import magicvase from '../../assets/magicvase.png';
import armor from '../../assets/armor1.png';
import helmet from '../../assets/helmet3.png';
import wing from '../../assets/wing3.png';
import monut from '../../assets/mount.jpg';
import { Card } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  background: {
    padding: 80,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 50,
    paddingRight: 50,

    [theme.breakpoints.down('sm')]: {
      padding: 10,
      paddingBottom: 35,
      paddingTop: 60,
      display: 'flex',
      justifyContent: 'center',
    },
  },
  image: {
    marginTop: 30,
    marginLeft: 40,
    width: 160,

    [theme.breakpoints.down('sm')]: {
      width: 150,
      height: 150,
      marginTop: 15,
      marginBottom: 10,
    },
  },
  itemsContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    paddingTop: 30,
    flexWrap: 'wrap',
  },
  itemGroup: {
    maxWidth: 250,
    paddingLeft: 10,
    paddingRight: 10,
  },
  heading: {
    color: theme.palette.pbr.heading,
    textAlign: 'left',
    fontSize: 36,
    fontWeight: 600,
    verticalAlign: 'middle',
    wordSpacing: '0px',
    alignSelf: 'center',
    paddingTop: 17,
    [theme.breakpoints.down('md')]: {
      marginBottom: 20,
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: 0,
      fontSize: 28,
      marginTop: 5,
    },
  },
  para: {
    fontWeight: 400,
    verticalAlign: 'baseline',
    letterSpacing: '-0.7px',
    margin: 0,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'left',

    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
      paddingTop: 5,
      marginTop: 0,
    },
  },
  title: {
    paddingTop: 10,
    textAlign: 'center',
    fontWeight: 600,
    fontSize: 24,
    color: 'yellow',
    fontFamily: 'Balsamiq Sans',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    width: 300,
    height: '100%',
    backgroundColor: '#ffb74d',
    border: '3px solid #757575',
    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.1)),
    url('https://media.istockphoto.com/photos/fire-flames-isolated-on-black-picture-id1138307761?k=6&m=1138307761&s=612x612&w=0&h=88Awwf62GbZb26IMLWv8I66D7WU_P_voCdzZEBu4Bvo=')`,
    backgroundSize: 'cover',
    marginBottom: 40,
  },
  textWrapper: {
    backgroundColor: '#e5e5e5',
    width: '100%',
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
  },

  frameCard: {
    background: `url(${cardFrame})`,
    backgroundRepeat: 'no-repeat',
    height: 500,
    width: 300,
    backgroundSize: 'contain',
    position: 'relative',
  },
  frameImage: {
    position: 'absolute',
    top: '8%',
    left: '8%',
  },
  frameText: {
    position: 'relative',
    top: '44%',

    display: 'flex',
    justifyContent: 'center',
  },
  frameStats: {
    position: 'absolute',
    top: '64%',
    left: '10%',
    [theme.breakpoints.down('md')]: {
      top: '65%',
    },
  },
  frameList: {
    fontWeight: '500',
    lineHeight: 1.2,
    color: 'black',
    [theme.breakpoints.down('md')]: {
      fontSize: 13,
      lineHeight: 1.4,
    },
  },
  frameListMount: {
    fontWeight: '500',
    lineHeight: 1.1,
    color: 'black',
    fontSize: 13,
  },
}));

const GameItems = () => {
  const classes = useStyles();
  let items = [
    {
      name: 'Sword',
      image: sword,
      listData: (
        <div>
          {' '}
          <p className={classes.para}>
            <ul className={classes.frameList}>
              <li>Level: 1 / 5</li>
              <li>Base Damage: 30</li>
              <li>Bonus: +7%</li>
              <li>Accuracy: +5</li>
            </ul>
          </p>
        </div>
      ),
    },
    {
      name: 'Big Knife',
      image: bigknife,
      listData: (
        <div>
          <p className={classes.para}>
            <ul className={classes.frameList}>
              <li>Level: 1 / 5</li>
              <li>Base Damage: 32</li>
              <li>Bonus: +5%</li>
              <li>Accuracy: +4</li>
            </ul>
          </p>
        </div>
      ),
    },
    {
      name: 'Tessen',
      image: tessen,
      listData: (
        <div>
          <p className={classes.para}>
            <ul className={classes.frameList}>
              <li>Level: 1 / 5</li>
              <li>Base Damage: 26</li>
              <li>Bonus: +8%</li>
              <li>Accuracy: +4</li>
            </ul>
          </p>
        </div>
      ),
    },
    {
      name: 'Bow & Arrow',
      image: bow,
      listData: (
        <div>
          <p className={classes.para}>
            <ul className={classes.frameList}>
              <li>Level: 1 / 5</li>
              <li>Base Damage: 29</li>
              <li>Bonus: +9%</li>
              <li>Accuracy: +4</li>
            </ul>
          </p>
        </div>
      ),
    },
    {
      name: 'Gun',
      image: gun,
      listData: (
        <div>
          <p className={classes.para}>
            <ul className={classes.frameList}>
              <li>Level: 1 / 5</li>
              <li>Base Damage: 36</li>
              <li>Bonus: +5%</li>
              <li>Accuracy: +3</li>
            </ul>
          </p>
        </div>
      ),
    },
    {
      name: 'Sceptre',
      image: sceptre,
      listData: (
        <div>
          <p className={classes.para}>
            <ul className={classes.frameList}>
              <li>Level: 1 / 5</li>
              <li>Base Damage: 31</li>
              <li>Bonus: +6%</li>
              <li>Accuracy: +3</li>
            </ul>
          </p>
        </div>
      ),
    },
    {
      name: 'Magic Vase',
      image: magicvase,
      listData: (
        <div>
          <p className={classes.para}>
            <ul className={classes.frameList}>
              <li>Level: 1 / 5</li>
              <li>Base Damage: 2</li>
              <li>Bonus: +6%</li>
              <li>Accuracy: +1</li>
            </ul>
          </p>
        </div>
      ),
    },
    {
      name: 'Armor',
      image: armor,
      listData: (
        <div>
          <p className={classes.para}>
            <ul className={classes.frameList}>
              <li>Level: 1 / 5</li>
              <li>HP: 10</li>
              <li>MP: 6</li>
              <li>Protection: +5</li>
            </ul>
          </p>
        </div>
      ),
    },
    {
      name: 'Helmet',
      image: helmet,
      listData: (
        <div>
          <p className={classes.para}>
            <ul className={classes.frameList}>
              <li>Level: 1 / 5</li>
              <li>HP: 5</li>
              <li>MP: 3</li>
              <li>Protection: +2</li>
            </ul>
          </p>
        </div>
      ),
    },
    {
      name: 'Wing',
      image: wing,
      listData: (
        <div>
          <p className={classes.para}>
            <ul className={classes.frameList}>
              <li>Level: 1 / 5</li>
              <li>HP: 7</li>
              <li>MP: 5</li>
              <li>Protection: +3</li>
            </ul>
          </p>
        </div>
      ),
    },
    {
      name: 'Mount',
      image: monut,
      listData: (
        <div>
          <p className={classes.para}>
            <ul className={classes.frameListMount}>
              <li>Level: 1 / 5</li>
              <li>Energy: 500/500</li>
              <li>Base Damage: 50</li>
              <li>Bonus: +5%</li>
              <li>Accuracy: +10</li>
              <li>Damage to the owner: +60</li>
            </ul>
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className={classes.background}>
      <h1 className={classes.heading}>Game Items</h1>
      <div className={classes.itemsContainer}>
        {items.map((item) => {
          return (
            <div className={classes.frameCard}>
              <div className={classes.frameImage}>
                <img className={classes.image} src={item.image} />
              </div>
              <div className={classes.frameText}>
                <h5 className={classes.title}>{item.name}</h5>
              </div>
              <div className={classes.frameStats}>{item.listData}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GameItems;
