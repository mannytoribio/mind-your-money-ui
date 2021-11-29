import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import { boxSizing, width } from "@mui/system"

function MonthlyBurn(props: CircularProgressProps & { value: number }) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        style={{
          height: "420px",
          width: "420px",
          marginTop: "10vh",
          marginLeft: "12vw",
          justifyContent: "center",
          color: "green",
        }}
        variant="determinate"
        {...props}
      />
      <Box
        sx={{
          top: 100,
          left: 250,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
          fontSize="90px"
        >{`${Math.ceil(props.value)}%`}</Typography>
      </Box>
    </Box>
  )
}

export default MonthlyBurn
