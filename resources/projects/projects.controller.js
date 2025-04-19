const HttpCodes = require("../../const/HttpCode");

const GetProjects = (req, res) => {
    res.status(HttpCodes.OK).json({
        data: [
            { id: 1, name: "Proyecto 1"},
            { id: 2, name: "Proyecto 2"},
            { id: 3, name: "Proyecto 3"},
        ],
        error: false,
        message: "Lista de proyectos",
    });
};

const CreateProject = (req, res) => {
    const { name, description, author } = req.body;

    if (!name) {
        return res
            .status(HttpCodes.BAD_REQUEST)
            .json({
                data: null,
                error: true,
                message: "El nombre del proyecto es obligatorio"
    })
    }
    res
        .status(HttpCodes.CREATED)
        .json({
            data: { name: name, id: 1},
            error: false,
            message: "Proyecto creado correctamente"
        })
};

const DeleteProject = (req, res) => {
    res.send("DELETE PROJECT");
};

module.exports = {
    GetProjects,
    CreateProject,
    DeleteProject
};