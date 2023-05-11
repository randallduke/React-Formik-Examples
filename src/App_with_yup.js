import { useFormik } from "formik";
import { schema } from "./schema";
import "./styles.css";

function AppWithYup() {
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
      email: "",
      cellPhone: ""
    },
    validationSchema: schema,
    onSubmit: (values) => {
      //Controller/Database Function Here
      console.log(values);
    }
  });

  return (
    <div>
      <h1 className="app-title">Bufex Form Example</h1>
      <section className="card">
        <form onSubmit={formik.handleSubmit}>
          <h2 className="section-header">React Formik Form</h2>
          <div className="section-item">
            <label>User Name : </label>
            <input
              name="userName"
              onChange={formik.handleChange}
              value={formik.values.userName}
              type={"text"}
              placeholder="User Name"
            />
            <p>{formik.errors.userName ? formik.errors.userName : ""}</p>
          </div>
          <div className="section-item small-top-margin">
            <label>Password : </label>
            <input
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              type={"password"}
              placeholder="Password"
            />
            <p>{formik.errors.password ? formik.errors.password : ""}</p>
          </div>
          <div className="section-item small-top-margin">
            <label>Bufex Email : </label>
            <input
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              type={"text"}
              placeholder="Email"
            />
            <p>{formik.errors.email ? formik.errors.email : ""}</p>
          </div>
          <div className="section-item small-top-margin">
            <label>Cell Phone : </label>
            <input
              name="cellPhone"
              onChange={formik.handleChange}
              value={formik.values.cellPhone}
              type={"text"}
              placeholder="555-555-5555"
            />
            <p>{formik.errors.cellPhone ? formik.errors.cellPhone : ""}</p>
          </div>
          <div className="section-item small-top-margin">
            <button type={"submit"}>Submit</button>
          </div>
        </form>
      </section>
    </div>
  );
}
export default AppWithYup;
