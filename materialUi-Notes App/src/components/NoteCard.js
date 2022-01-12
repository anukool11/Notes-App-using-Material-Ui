import React from 'react'
import CardHeader from '@material-ui/core/CardHeader'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { IconButton, Typography } from '@material-ui/core'
import { DeleteOutlined } from '@material-ui/icons'
import { makeStyles, Avatar } from '@material-ui/core'
import { blue, pink, yellow, green } from '@material-ui/core/colors'

const useStyles = makeStyles({
    avatar: {
        backgroundColor: (note)=>{
            if(note.category=='work')
                return yellow[700]
            if(note.category=='money')
                return green[500]
            if(note.category=='todos')
                return pink[700]
            return blue[500]
        } 
    }
})

const NoteCard = ({note, handleDelete}) => {

    const classes = useStyles(note)
    return (  
        <Card elevation={1} className={classes.test}>
            <CardHeader 
                avatar={
                    <Avatar className={classes.avatar}>
                        {note.category[0].toUpperCase()}
                    </Avatar>
                }
                action={
                    <IconButton>
                        <DeleteOutlined onClick={()=>handleDelete(note.id)}/>
                    </IconButton>
                }
                title={note.title}
                subheader={note.category}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary">
                    {note.details}
                </Typography>
            </CardContent>
        </Card>
    );
}
 
export default NoteCard;