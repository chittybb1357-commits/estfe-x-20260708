import { Divider, ListItem, ListItemText, Stack, Button } from "@mui/material";
import { db } from "../firebase";
import { doc, deleteDoc } from "firebase/firestore";

export default function Comment({ item, isShown }) {
  const handleDelete = async () => {
    if (!window.confirm("정말 삭제할까요?")) return;

    await deleteDoc(doc(db, "comments", item.id));
  };

  return (
    <ListItem key={item.id} alignItems="flex-center" divider>
      <ListItemText
        primary={item.comment}
        secondary={item.date?.toDate ? item.date.toDate().toLocaleString() : "작성시간 없음"}
      />

      {isShown && (
        <Stack direction="row" spacing={1}>
          <Button variant="outlined" size="small">
            수정
          </Button>

          {/*
           삭제 버튼을 클릭하면, handleDelete 함수 실행 
           정말 삭제할까요 confirm // 예 // await
           deleteDoc(doc(db, "comments", 글아이디)); 
           */}

          <Button variant="contained" color="error" size="small" onClick={handleDelete}>
            삭제
          </Button>
        </Stack>
      )}
    </ListItem>
  );
}
