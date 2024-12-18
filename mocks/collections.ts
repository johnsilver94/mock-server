const collections = [
    {
        id: "base",
      	routes: [
            "get-todos:success",
            "get-todos-paginated:success",
            "get-todo:success",
            "create-todo:success",
            "update-todo:success",
            "delete-todo:success"
        ]
    },
    {
        id: "alternative",
        routes: ["get-todos:success"],
        from: "base"
    }
]

export default collections;
