import Swal from 'sweetalert2'

const alers = ({ title, text, icon, confirmButtonText }) => {
  Swal.fire({
    title,
    text,
    icon,
    confirmButtonText
  })
}

const alertsError = (text) => {
  return alers({
    title: 'Error',
    text,
    icon: 'error',
    confirmButtonText: 'Ok'
  })
}
const alertsSuccess = (text) => {
  return alers({
    title: 'Success',
    text,
    icon: 'success',
    confirmButtonText: 'Ok'
  })
}
const alertsWarning = (text) => {
  return alers({
    title: 'Warning',
    text,
    icon: 'warning',
    confirmButtonText: 'Ok'
  })
}

export {
  alertsError,
  alertsSuccess,
  alertsWarning
}
