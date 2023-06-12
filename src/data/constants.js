import { PATH_TO_LOGIN, PATH_TO_SIGNUP } from "../feautures/authentication"

export const PATH_TO_HOME = '/'

export const DEVICE_SIZES = {
  mobile: 768,
  tablet: 992,
  laptop: 1324,
  desktop: 2024
}

export const SITE = {
  name: 'kingsHire',
  URL: 'http://localhost:3500',
  workerTitle: 'Kinglancer',
  workersTitle: 'Kinglancers'
}

export const MENU_OPTIONS = [
  { name: 'Home', id: 1, path: PATH_TO_HOME },
  { name: 'Signup', id: 2, path: `/${PATH_TO_SIGNUP}` },
  { name: 'Login', id: 3, path: `/${PATH_TO_LOGIN}` },
  { name: 'Logout', id: 4, path: 'user' },
  { name: 'Switch to Client', id: 5, path: 'user' },
  { name: 'Switch to Worker', id: 6, path: 'user' },
  { name: 'Become a Client', id: 7, path: 'user' },
]

export const SELECTED_JOBS = [
  { name: 'Software Development', id: 1},
  { name: 'UX/UI Design', id: 2},
  { name: 'Business Analysis', id: 3},
  { name: 'Marketing', id: 4},
  { name: 'Photography', id: 5},
  { name: 'Graphic & Design', id: 6},
  { name: 'Interior Design', id: 7},
  { name: 'Painter', id: 8},
  { name: 'Hairdresser', id: 9},
  { name: 'Chauffeur', id: 10},
]
