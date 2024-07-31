import './App.css';
import CircularProgress from '@mui/material/CircularProgress';
import useFetch from './CustomHooks/useFetch';
import { Box, Container, Fade, Grid, Typography } from '@mui/material';
import CustomCard from './Components/CustomCard';
function App() {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/photos');
  console.log(data);

  if (loading) return (
    <Grid container sx={{ height: '100vh', placeContent: 'center' }}>
      <Typography variant='h4'>Loading...</Typography>
    </Grid>
  );

  if (error) return (<Grid container sx={{ height: '100vh', placeContent: 'center' }}>
    <Typography variant='h5'>{error}</Typography>
  </Grid>);

  return (
    < Container>
      <Grid container spacing={2}>
        {data.map(item => (
          <Grid item lg={3} md={4} key={item.id}>
            <CustomCard item={item} />
          </Grid>
        ))}
      </Grid>

    </ Container>
  );
}

export default App;

