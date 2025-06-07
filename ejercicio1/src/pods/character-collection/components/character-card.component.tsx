import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { CharacterEntityVm } from '../character-collection.vm';
import * as classes from './character-card.styles';

interface Props {
  character: CharacterEntityVm;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character } = props;

  return (
    <Card>
      <CardHeader
        avatar={<Avatar aria-label="Character">{hotel.rating}</Avatar>}
        title={hotel.name}
        subheader={hotel.address}
      />
      <CardContent>
        <div className={classes.content}>
          <CardMedia
            image={hotel.picture}
            title={hotel.name}
            style={{ height: 0, paddingTop: '56.25%' }}
          />
          <Typography variant="subtitle1" gutterBottom>
            {hotel.description}
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        <IconButton onClick={() => onEdit(hotel.id)}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => onDelete(hotel.id)}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
