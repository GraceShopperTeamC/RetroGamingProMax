// We will keep this for now, but have already moved all routes and authentication info to App.js

// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { Route, Routes } from 'react-router-dom';
// import AuthForm from './AuthForm';
// import Home from './Home';
// import { me } from '../store/store';

// const AppRoutes = () => {
//   const isLoggedIn = useSelector((state) => !!state.auth.me.id);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(me());
//   }, []);

//   return (
//     <div>
//       {isLoggedIn ? (
//         <Routes>
//           <Route path="/*" element={<Home />} />
//           <Route to="/home" element={<Home />} />
//         </Routes>
//       ) : (
//         <Routes>
//           <Route
//             path="/*"
//             element={<AuthForm name="login" displayName="Login" />}
//           />
//           <Route
//             path="/login"
//             element={<AuthForm name="login" displayName="Login" />}
//           />
//           <Route
//             path="/signup"
//             element={<AuthForm name="signup" displayName="Sign Up" />}
//           />
//         </Routes>
//       )}
//     </div>
//   );
// };

// export default AppRoutes;
