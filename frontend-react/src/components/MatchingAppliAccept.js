import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function MatchingAppliAccept(props) {
  const { pk, content, userId } = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const acceptStudy = (e) => {
    e.preventDefault();

    axios
      .post(`/match/${pk}/${userId}`)
      .then(() => {
        alert('승인되었습니다!');
      })
      .catch((err) => {
        console.log(err);
        alert('이미 수락한 인원입니다.');
      });
  };
  return (
    <div>
      <Button onClick={handleOpen}>detail</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            신청자 상세 페이지
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {content}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <button type="submit" onClick={acceptStudy}>
              수락
            </button>
            <button type="submit">거절</button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}