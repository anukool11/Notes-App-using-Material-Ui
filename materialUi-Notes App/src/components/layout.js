import { makeStyles } from '@material-ui/core'
import React from 'react'
import { Typography } from '@material-ui/core'
import { Avatar, Drawer, List, ListItem, ListItemIcon, ListItemText, AppBar, Toolbar } from '@material-ui/core'
import {SubjectOutlined, AddCircleOutlineOutlined} from '@material-ui/icons'
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { format } from 'date-fns';

const drawerWidth = 240

const useStyles = makeStyles((theme) => {
    return {
      page: {
        background: '#f9f9f9',
        width: '100%',
        padding: theme.spacing(3),
      },
      root: {
        display: 'flex',
      },
      drawer: {
        width: drawerWidth,
      },
      drawerPaper: {
        width: drawerWidth,
      },
      active: {
        background: '#f4f4f4'
      },
      title: {
        padding: theme.spacing(2),
      },
      appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
      date: {
        flexGrow: 1
      },
      toolbar: theme.mixins.toolbar,
      avatar:{
          marginLeft: theme.spacing(2)
      }
    }
  })

export default function Layout({children}) {
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()

    const menuItems = [
        {
            text:'My Notes',
            icon: <SubjectOutlined color="secondary" />,
            path: '/' 
        },
        {
            text:'Create Note',
            icon: <AddCircleOutlineOutlined color="secondary" />,
            path: '/create' 
            
        }
        
    ]
        
    return (
        <div className={classes.root}>

            <AppBar
                className = {classes.appBar}
                elevation={0}
            >
                <Toolbar>
                    <Typography className={classes.date}>
                        Today is the {format(new Date(), 'do MMMM Y')}
                    </Typography>
                    <Typography>
                        Anukool
                    </Typography>
                    <Avatar src="/graham-icon.jpeg" className={classes.avatar}/>
                </Toolbar>
            </AppBar>

            {/* Side Drawer */}
            <Drawer
                className={classes.drawer}
                variant="permanent"
                anchor="left"
                classes={{paper: classes.drawerPaper }}
            >
                <div>
                    <Typography variant="h5" className={classes.title}>
                        Notes
                    </Typography>
                </div>

                <List>
                    {menuItems.map(item=>(
                        <ListItem
                            button
                            key={item.text}
                            onClick={()=>history.push(item.path)}
                            className={location.pathname==item.path ? classes.active: null}
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    ))}
                </List>

            </Drawer>
            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                {children}
            </div>
        </div>
    )
}
