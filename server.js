const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const app = express();
const port = process.env.port || 3000;
app.use(express.json());
// ID (clave primaria)
// Nombre del Proyecto
// Descripción
// Fecha de Inicio
// Fecha de Finalización
let projects = [
  {
    id: 1,
    name: "Aplicación móvil.",
    description: "Realizar una app móvil.",
    startDate: "2023-03-25",
    finishDate: "2023-03-26",
  },
  {
    id: 2,
    name: "Página web.",
    description: "Realizar una página web.",
    startDate: "2023-03-25",
    finishDate: "2023-03-26",
  },
  {
    id: 3,
    name: "Articulo.",
    description: "Realizar un articulo.",
    startDate: "2023-03-25",
    finishDate: "2023-03-26",
  },
  {
    id: 4,
    name: "Maqueta.",
    description: "Realizar una maqueta.",
    startDate: "2023-03-25",
    finishDate: "2023-03-26",
  },
  {
    id: 5,
    name: "Video cinematografico.",
    description: "Realizar un video cinematografico.",
    startDate: "2023-03-25",
    finishDate: "2023-03-26",
  },
  {
    id: 6,
    name: "Escultura.",
    description: "Realizar una escultura.",
    startDate: "2023-03-25",
    finishDate: "2023-03-26",
  },
  {
    id: 7,
    name: "Leer libro.",
    description: "Leer un libro.",
    startDate: "2023-03-25",
    finishDate: "2023-03-26",
  },
  {
    id: 8,
    name: "Presentación final.",
    description: "Realizar una presentación final.",
    startDate: "2023-03-25",
    finishDate: "2023-03-26",
  },
  {
    id: 9,
    name: "Página web 2.",
    description: "Realizar una página web 2.",
    startDate: "2023-03-25",
    finishDate: "2015-03-26",
  },
  {
    id: 10,
    name: "Investigación final.",
    description: "Realizar una investigación final.",
    startDate: "2023-03-25",
    finishDate: "2023-03-26",
  },
];
// ID (clave primaria),
// ID del Proyecto (clave foránea),
// Nombre de la Tarea,
// Descripción,
// Fecha de Asignación,
// Estado
let tasks = [
  {
    id: 1,
    idProject: 1,
    name: "Investigación",
    description: " Analizar datos científicos.",
    openedAt: "2023-09-30",
    status: false,
  },
  {
    id: 2,
    idProject: 1,
    name: "Investigación 2",
    description: " Analizar datos científicos.",
    openedAt: "2023-09-30",
    status: false,
  },
  {
    id: 3,
    idProject: 1,
    name: "Investigación 3",
    description: " Analizar datos científicos.",
    openedAt: "2023-09-30",
    status: false,
  },
  {
    id: 20,
    idProject: 1,
    name: "Investigación 3",
    description: " Analizar datos científicos.",
    openedAt: "2023-10-30",
    status: true,
  },
  {
    id: 4,
    idProject: 2,
    name: "Resumen lectura 1",
    description: " Sintetizar texto académico.",
    openedAt: "2023-09-30",
    status: false,
  },
  {
    id: 5,
    idProject: 2,
    name: "Resumen lectura 2",
    description: " Sintetizar texto académico.",
    openedAt: "2023-09-30",
    status: false,
  },
  {
    id: 6,
    idProject: 2,
    name: "Resumen lectura 3",
    description: " Sintetizar texto académico.",
    openedAt: "2023-09-30",
    status: false,
  },
  {
    id: 7,
    idProject: 3,
    name: "Tarea matemáticas 1.",
    description: "Resolver ecuaciones complejas.",
    openedAt: "2023-09-30",
    status: false,
  },
  {
    id: 8,
    idProject: 3,
    name: "Tarea matemáticas 2.",
    description: "Resolver ecuaciones complejas.",
    openedAt: "2023-09-30",
    status: false,
  },
  {
    id: 9,
    idProject: 3,
    name: "Tarea matemáticas 3.",
    description: "Resolver ecuaciones complejas.",
    openedAt: "2023-09-30",
    status: false,
  },
  {
    id: 10,
    idProject: 4,
    name: "Ensayo historia 1",
    description: "Escribir sobre un período",
    openedAt: "2023-09-30",
    status: false,
  },
  {
    id: 11,
    idProject: 4,
    name: "Ensayo historia 2",
    description: "Escribir sobre un período",
    openedAt: "2023-09-30",
    status: false,
  },
  {
    id: 12,
    idProject: 4,
    name: "Ensayo historia 3",
    description: "Escribir sobre un período",
    openedAt: "2023-09-30",
    status: false,
  },
  {
    id: 13,
    idProject: 5,
    name: "Investigación 1",
    description: "Realizar una investigación",
    openedAt: "2023-09-30",
    status: false,
  },
  {
    id: 14,
    idProject: 5,
    name: "Investigación 2",
    description: "Realizar una investigación",
    openedAt: "2023-09-30",
    status: false,
  },
  {
    id: 15,
    idProject: 6,
    name: "Investigación proyecto 6",
    description: "Realizar una investigación",
    openedAt: "2023-09-30",
    status: false,
  },
  {
    id: 16,
    idProject: 7,
    name: "Investigación proyecto 7",
    description: "Realizar una investigación",
    openedAt: "2023-09-30",
    status: false,
  },
  {
    id: 17,
    idProject: 8,
    name: "Investigación proyecto 8",
    description: "Realizar una investigación",
    openedAt: "2023-09-30",
    status: false,
  },
  {
    id: 18,
    idProject: 9,
    name: "Investigación proyecto 9",
    description: "Realizar una investigación",
    openedAt: "2023-09-30",
    status: false,
  },
  {
    id: 19,
    idProject: 10,
    name: "Investigación proyecto 10",
    description: "Realizar una investigación",
    openedAt: "2023-09-30",
    status: false,
  },
];

// Get all projects
app.get("/partners/v1/projects", (req, res) => {
  if (projects) {
    res.status(200).json({
      status: 1,
      message: "Existen proyectos.",
      projects: projects,
    });
  } else {
    res.status(404).json({
      status: 0,
      message: "No existen proyectos.",
      projects: projects,
    });
  }
});
// Get all tasks
app.get("/partners/v1/tasks", (req, res) => {
  if (tasks) {
    res.status(200).json({
      status: 1,
      message: "Existen tareas.",
      tasks: tasks,
    });
  } else {
    res.status(404).json({
      status: 0,
      message: "No existen tareas.",
      tasks: tasks,
    });
  }
});
// FUNCIONANDO - Mostrar todas las tareas de un proyecto
app.get("/partners/v1/projects/:projectId/tasks/all", (req, res) => {
  console.log("me metí acá");
  const projectId = req.params.projectId;
  const project = projects.find((projects) => projects.id == projectId);
  if (!project) {
    res.status(404).json({
      status: 0,
      message: "El proyecto no existe.",
      tasks: [],
    });
  } else {
    const task = tasks.filter((tasks) => tasks.idProject == projectId);
    if (task.length > 0) {
      res.status(200).json({
        status: 1,
        message: "Tareas del proyecto encontradas.",
        tasks: task,
      });
    } else {
      res.status(404).json({
        status: 0,
        message: "Tareas del proyecto no encontradas.",
        tasks: [],
      });
    }
  }
});
// FUNCIONANDO - Mostrar una tarea en especifico de un proyecto en especifico
app.get("/partners/v1/projects/:projectId/tasks/:taskId", (req, res) => {
  const projectId = req.params.projectId;
  const taskId = req.params.taskId;

  const project = projects.find((project) => project.id == projectId);
  if (!project) {
    res.status(404).json({
      status: 0,
      message: "Proyecto no encontrado",
      task: null,
    });
  } else {
    const task = tasks.find(
      (tasks) => (tasks.id == taskId) & (tasks.idProject == projectId)
    );
    if (task) {
      res.status(200).json({
        status: 1,
        message: "Tarea encontrada.",
        task: task,
      });
    } else {
      res.status(404).json({
        status: 0,
        message: "Tarea no encontrada en el proyecto.",
        task: null,
      });
    }
  }
});
// FUNCIONANDO - Mostrar tareas de un proyecto por estado (Use Query String para el estado)
app.get("/partners/v1/projects/:projectId/tasks", (req, res) => {
  const projectId = req.params.projectId;
  const status = req.query.status;
  const project = projects.find((project) => project.id == projectId);
  if (!project) {
    res.status(404).json({
      status: 0,
      message: "Proyecto no encontrado.",
      tasks: [],
    });
  } else {
    const tasksWithStatus = tasks.filter(
      (task) =>
        (status === "true"
          ? task.status === true
          : status === "false"
          ? task.status === false
          : false) && task.idProject == projectId
    );
    if (tasksWithStatus.length > 0) {
      res.status(200).json({
        status: 1,
        message: `Tareas del proyecto con el estado '${status}' encontradas.`,
        tasks: tasksWithStatus,
      });
    } else {
      res.status(404).json({
        status: 0,
        message: `No se encontraron tareas del proyecto con el estado '${status}'.`,
        tasks: [],
      });
    }
  }
});
// FUNCIONANDO - Mostrar todas las tareas de un proyecto paginadas
app.get("/partners/v1/projects/:projectId/tasksPag", (req, res) => {
  const projectId = req.params.projectId;
  const page = req.query.page;
  const num_registers = req.query.num_registers;

  const begin = (page - 1) * num_registers;
  const end = page * num_registers;

  const project = projects.find((project) => project.id == projectId);
  if (!project) {
    res.status(404).json({
      status: 0,
      message: "Proyecto no encontrado.",
      tasks: [],
    });
  } else {
    const projectTasks = tasks.filter((tasks) => tasks.idProject == projectId);
    if (projectTasks.length > 0) {
      const paginatedTasks = projectTasks.slice(begin, end);
      res.status(200).json({
        status: 1,
        message: "Tareas del proyecto encontradas.",
        tasks: paginatedTasks,
      });
    } else {
      res.status(404).json({
        status: 0,
        message: "Tareas del proyecto no encontradas.",
        tasks: [],
      });
    }
  }
});
// Mostrar tareas de un proyecto por fecha de inicio
app.get("/partners/v1/projects/:projectId/tasksOpenedAt", (req, res) => {
  const projectId = req.params.projectId;
  const openedAt = req.query.openedAt;
  const project = projects.find((project) => project.id == projectId);
  if (!project) {
    res.status(404).json({
      status: 0,
      message: "Proyecto no encontrado.",
      tasks: [],
    });
  } else {
    const tasksOpenedAt = tasks.filter(
      (task) => task.openedAt == openedAt && task.idProject == projectId
    );
    if (tasksOpenedAt.length > 0) {
      res.status(200).json({
        status: 1,
        message: `Tareas del proyecto con la fecha de de inicio '${openedAt}' encontradas.`,
        tasks: tasksOpenedAt,
      });
    } else {
      res.status(404).json({
        status: 1,
        message: `No se encontraron tareas del proyecto con la fecha de de inicio '${openedAt}'.`,
        tasks: [],
      });
    }
  }
});
// Get by id
app.get("/partners/v1/projects/:id", (req, res) => {
  const id = req.params.id;
  const project = projects.find((projects) => projects.id == id);
  if (project) {
    res.status(200).json({
      status: 1,
      message: "Proyecto encontrado.",
      project: project,
    });
  } else {
    res.status(404).json({
      status: 0,
      message: "Proyecto no encontrado.",
      project: project,
    });
  }
});
app.get("/partners/v1/tasks/:id", (req, res) => {
  const id = req.params.id;
  const task = projects.find((tasks) => tasks.id == id);
  if (task) {
    res.status(200).json({
      status: 1,
      message: "Tarea encontrado.",
      task: task,
    });
  } else {
    res.status(404).json({
      status: 0,
      message: "Tarea no encontrado.",
      task: task,
    });
  }
});
// Post
app.post("/partners/v1/projects", (req, res) => {
  const { name, description, startDate, finishDate } = req.body;
  const id = Math.round(Math.random() * 1000);
  if (!name | !description | !startDate | !finishDate) {
    res.status(400).json({
      status: 0,
      message: "Faltan parámetros en la solicitud (Bad Request).",
    });
  } else {
    const project = { id, name, description, startDate, finishDate };
    const initialLength = projects.length;
    projects.push(project);
    if (projects.length > initialLength) {
      res.status(201).json({
        status: 1,
        message: "Proyecto creado correctamente.",
      });
    } else {
      res.status(500).json({
        status: 0,
        message: "Ocurrió un error desconocido.",
      });
    }
  }
});
app.post("/partners/v1/tasks", (req, res) => {
  const { idProject, name, description, openedAt, status } = req.body;
  const id = Math.round(Math.random() * 1000);
  if (!idProject | !name | !description | !openedAt | (status == undefined)) {
    console.log("....----------------------------");
    console.log(idProject);
    console.log(name);
    console.log(description);
    console.log(openedAt);
    console.log(status);
    res.status(400).json({
      status: 0,
      message: "Faltan parámetros en la solicitud (Bad Request).",
    });
  } else {
    const task = { id, name, idProject, description, openedAt, status };
    const initialLength = tasks.length;
    tasks.push(task);
    if (tasks.length > initialLength) {
      res.status(201).json({
        status: 1,
        message: "Tarea creada correctamente.",
      });
    } else {
      res.status(500).json({
        status: 0,
        message: "Ocurrió un error desconocido.",
      });
    }
  }
});
// Put
app.put("/partners/v1/projects/:id", (req, res) => {
  const { id } = req.params;
  const { name, description, startDate, finishDate } = req.body;
  if (!name | !description | !startDate | !finishDate) {
    res.status(400).json({
      status: 0,
      message: "Faltan parámetros en la solicitud (Bad Request).",
    });
  } else {
    const indexUpdate = projects.findIndex((project) => project.id == id);
    if (indexUpdate != -1) {
      projects[indexUpdate].name = name;
      projects[indexUpdate].description = description;
      projects[indexUpdate].startDate = startDate;
      projects[indexUpdate].finishDate = finishDate;
      res.status(200).json({
        status: 1,
        message: "Proyecto actualizado.",
        projects: projects[indexUpdate],
      });
    } else {
      res.status(404).json({
        status: 0,
        message: "Proyecto no encontrado.",
      });
    }
  }
});
app.put("/partners/v1/orders/:id", (req, res) => {
  const { id } = req.params;
  const { idProject, name, description, openedAt, status } = req.body;
  if (!idProject | !name | !description | !openedAt | !status) {
    res.status(400).json({
      status: 0,
      message: "Faltan parámetros en la solicitud (Bad Request).",
    });
  } else {
    const indexUpdate = tasks.findIndex((task) => task.id == id);
    if (indexUpdate != -1) {
      tasks[indexUpdate].idProject = idProject;
      tasks[indexUpdate].name = name;
      tasks[indexUpdate].description = description;
      tasks[indexUpdate].openedAt = openedAt;
      tasks[indexUpdate].status = status;
      res.status(200).json({
        status: 1,
        message: "Tarea actualizada.",
        tasks: tasks[indexUpdate],
      });
    } else {
      res.status(404).json({
        status: 0,
        message: "Tarea no encontrada.",
      });
    }
  }
});
// Delete
app.delete("/partners/v1/projects/:id", (req, res) => {
  const { id } = req.params;
  const indexDelete = projects.findIndex((project) => project.id == id);
  if (indexDelete != 1) {
    projects.splice(indexDelete, 1);
    res.status(201).json({
      status: 1,
      message: "Proyecto eliminado correctamente.",
    });
  } else {
    res.status(404).json({
      status: 0,
      message: "Pedido no encontrado.",
    });
  }
});
app.delete("/partners/v1/tasks/:id", (req, res) => {
  const { id } = req.params;
  const indexDelete = tasks.findIndex((task) => task.id == id);
  if (indexDelete != 1) {
    tasks.splice(indexDelete, 1);
    res.status(201).json({
      status: 1,
      message: "Tarea eliminada correctamente.",
    });
  } else {
    res.status(404).json({
      status: 0,
      message: "Tarea no encontrada.",
    });
  }
});
app.listen(port, () => {
  console.log("Servidor corriendo en el puerto: ", port);
});
