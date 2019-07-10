import TaskLists from "views/TaskLists/TaskLists.jsx";
import NewTask from "views/NewTask/NewTask.jsx";
import TaskDetails from 'views/TaskDetails/TaskDetails.jsx';

var dashRoutes = [
  {
    path: "/Tasklists",
    name: "Task Lists",
    icon: "nc-icon nc-tile-56",
    component: TaskLists
  },
  {
    path: "/Newtask",
    name: "New Tasks",
    icon: "nc-icon nc-settings-gear-65",
    component: NewTask
  },
  {
    path: "/Taskdetails/:task",
    name: "Task Details",
    icon: "nc-icon nc-settings-gear-65",
    nonsidebar: true,
    component: TaskDetails
  },
  { redirect: true, path: "/", pathTo: "/Tasklists", name: "Tasktists" }
];
export default dashRoutes;
