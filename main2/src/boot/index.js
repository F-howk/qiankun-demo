import {
  registerMicroApps,
  start
} from "qiankun";
export default ({
  app
}) => {

  registerMicroApps([{
      name: "app1", // app name registered
      entry: "http://localhost:8083",
      container: "#about",
      activeRule: "/app1",
    },
    {
      name: "app2", // app name registered
      entry: "http://localhost:8000",
      container: "#abouts",
      activeRule: "/app2",
      props: {
        token: 'xx', // 向子应用传递的数据
      },
    },
  ]);
  start()
}
