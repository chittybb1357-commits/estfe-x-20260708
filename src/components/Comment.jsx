import { Divider, ListItem, ListItemText } from "@mui/material";

export default function Comment({ item }) {
  return (
    <ListItem key={item.id} alignItems="flex-start" divider>
      <ListItemText
        primary={item.comment}
        secondary={item.date?.toDate ? item.date.toDate().toLocaleString() : "작성시간 없음"}
      />
    </ListItem>
  );
}
