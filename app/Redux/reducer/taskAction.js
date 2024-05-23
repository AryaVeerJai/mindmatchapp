import { createSlice } from '@reduxjs/toolkit';
import uuid from 'react-native-uuid';
import { COLORS } from '../../constants/theme';

const TaskArry = [
    {
      id : uuid.v4(),
      title : "Component Library Update",
      date : "03 Fab",
      color : COLORS.primary6,
      desc : "",
      images : [],
      subTasks : [],
      complete : false,
    },
    {
      id : uuid.v4(),
      title : "User Profile Redesign",
      date : "10 Fab",
      color : "#00e049",
      desc : "",
      images : [],
      subTasks : [],
      complete : false,
    },
    {
      id : uuid.v4(),
      title : "Check Clients Feedback",
      date : "15 Fab",
      color : "#ed9736",
      desc : "",
      images : [],
      subTasks : [],
      complete : false,
    },
    {
      id : uuid.v4(),
      title : "Check Clients Feedback",
      date : "15 Fab",
      color : "#ed9736",
      desc : "",
      images : [],
      subTasks : [],
      complete : false,
    },
    {
      id : uuid.v4(),
      title : "Component Library Update",
      date : "03 Fab",
      color : COLORS.primary6,
      desc : "",
      images : [],
      subTasks : [],
      complete : true,
    },
    {
      id : uuid.v4(),
      title : "User Profile Redesign",
      date : "10 Fab",
      color : "#00e049",
      desc : "",
      images : [],
      subTasks : [],
      complete : true,
    },
]

export const userSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: TaskArry,
  },
  reducers: {
    addTask(state,action) {
        state.todos.push(action.payload)
    },

    completeTask(state,action){
        index = state.todos.findIndex((obj => obj.id == action.payload));
        const newTodos = [...state.todos];
        newTodos[index].complete = !newTodos[index].complete;
        let temp = state.todos[index].subTasks.map((data) => {
          return { ...data, complete : newTodos[index].complete };
        });
        newTodos[index].subTasks = temp;
    },

    updateTask(state,action){
        index = state.todos.findIndex((obj => obj.id == action.payload.id));
        const newTodos = [...state.todos];
        newTodos[index].title = action.payload.title;
        newTodos[index].desc = action.payload.desc;
        newTodos[index].color = action.payload.color;
        newTodos[index].complete = action.payload.complete;
        if(newTodos[index].complete){
          let temp = state.todos[index].subTasks.map((data) => {
            return { ...data, complete : true };
          });
          newTodos[index].subTasks = temp;
        }

    },

    addImageTask(state , action){
      index = state.todos.findIndex((obj => obj.id == action.payload.id));
      const newTodos = [...state.todos];
      newTodos[index].images = action.payload.images;
    },

    taskImageRemove(state,action){
      index = state.todos.findIndex((obj => obj.id == action.payload.taskId));
      const newTodos = [...state.todos];
      if (index > -1) {
        newTodos[index].images.splice(action.payload.imageIndex, 1);
      }
    },

    deleteTask(state,action){
      index = state.todos.findIndex((obj => obj.id == action.payload));
      const newTodos = [...state.todos];
      if (index > -1) {
        newTodos.splice(index, 1); 
      }
      return {...state, todos:newTodos}
    },

    addSubTask(state,action){
      index = state.todos.findIndex((obj => obj.id == action.payload.id));
      const newTodos = [...state.todos];
      newTodos[index].subTasks.push(action.payload.data);
    },
    
    completeSubTask(state,action){
      taskIndex = state.todos.findIndex((obj => obj.id == action.payload.id));
      const newTodos = [...state.todos];
      subTaskIndex = newTodos[taskIndex].subTasks.findIndex((obj => obj.id == action.payload.data.id))

      newTodos[taskIndex].subTasks[subTaskIndex].complete = !newTodos[taskIndex].subTasks[subTaskIndex].complete;
    },

    updateSubTask(state,action){
      parentIndex = state.todos.findIndex((obj => obj.id == action.payload.parentId));
      const newTodos = [...state.todos];
      taskIndex = newTodos[parentIndex].subTasks.findIndex((obj => obj.id == action.payload.data.id));

      newTodos[parentIndex].subTasks[taskIndex].title = action.payload.data.title;
      newTodos[parentIndex].subTasks[taskIndex].desc = action.payload.data.desc;
      newTodos[parentIndex].subTasks[taskIndex].color = action.payload.data.color;
    },

    deleteSubTask(state,action){
      parentIndex = state.todos.findIndex((obj => obj.id == action.payload.parentId));
      const newTodos = [...state.todos];
      taskIndex = newTodos[parentIndex].subTasks.findIndex((obj => obj.id == action.payload.data.id));
      if (taskIndex > -1) {
        newTodos[parentIndex].subTasks.splice(taskIndex, 1); 
      }
    }

  }
})


export const {
    addTask , 
    completeTask , 
    updateTask , 
    deleteTask ,
    addSubTask , 
    completeSubTask ,
    updateSubTask ,
    deleteSubTask ,
    taskImageRemove ,
    addImageTask
} = userSlice.actions;

export default userSlice.reducer;