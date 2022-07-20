import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

const CssTextField = styled(TextField)({
  '& label': {
    color: '#FFFFFF',
  },
  '& label.Mui-focused': {
    color: '#FFFFFF',
  },

  '& .MuiOutlinedInput-root': {
    background: '#224957',
    height: '45px',
  },
});

export default function CustomizedInputs(props: { label: string }) {
  return <CssTextField label={props.label || ''} />;
}
