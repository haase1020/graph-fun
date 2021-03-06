import React from 'react';
import PrendaGraph from './components/PrendaGraph';
import Graph2 from './components/Graph2';
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core"

import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from '@material-ui/icons/Info';
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) =>({
 drawerPaper: { width: 'inherit'},
 link: { 
   textDecoration: 'none', 
   color: theme.palette.text.primary
  }
}));





function App () {
  const classes = useStyles();

    return (
      <Router>
        <div style={{ display: 'flex'}}>
          <Drawer
          style={{ width: '240px'}}
          variant="persistent"
          anchor="left"
          open={true}
          classes={{ paper: classes.drawerPaper}}
          >
            <List>
              <Link to="/" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary={"Home"}/>
              </ListItem>
              </Link>
              <Link to="/about" className={classes.link}>
              <ListItem button>
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary={"About"}/>
              </ListItem>
              </Link>
            </List>
          </Drawer>
          <Switch>
            <Route exact path="/">
              <PrendaGraph />
            </Route>
            <Route exact path="/about">
              <Graph2 />
              </Route>
          </Switch>
        </div>
      </Router>
  

    );
  }

export default App;