import React, { useState } from 'react';
import axios from 'axios';
// 이부분 프리티어랑 eslint 충돌나는듯..

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Select,
  MenuItem,
  InputLabel,
} from '@mui/material';

export default function MatchingCreate(props) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [memberNum, setMemeberNum] = useState(2);
  const { handleClickClose } = props;

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleContent = (e) => {
    setContent(e.target.value);
  };

  const handleMemberNum = (e) => {
    setMemeberNum(e.target.value);
  };

  const onClickCreate = () => {
    const body = {
      title,
      content,
      memberNum,
    };

    if (title === '' || content === '' || memberNum === '') {
      console.log('내용을 기입해주세요.');
    } else {
      axios
        .post('/match', body)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div>
      <Dialog open fullWidth maxWidth="md">
        <DialogTitle>글 작성 폼</DialogTitle>
        <DialogContent>
          <div>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="제목"
              type="title"
              fullWidth
              variant="standard"
              onChange={handleTitle}
            />
          </div>

          <div>
            <TextField
              autoFocus
              margin="dense"
              label="내용"
              type="text"
              fullWidth
              variant="outlined"
              multiline
              rows={15}
              maxRows={20}
              onChange={handleContent}
            />
            <br />
            <br />
            <InputLabel>스터디원 수</InputLabel>
            <Select value={memberNum} label="멤버수" onChange={handleMemberNum}>
              <MenuItem value={2}>2명</MenuItem>
              <MenuItem value={3}>3명</MenuItem>
              <MenuItem value={4}>4명</MenuItem>
              <MenuItem value={5}>5명</MenuItem>
              <MenuItem value={6}>6명</MenuItem>
            </Select>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClickCreate}>작성</Button>
          <Button onClick={handleClickClose}>취소</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}