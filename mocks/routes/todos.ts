import { Todo } from "../../types"
import { todos } from "../fixtures/todos"

const routes = [
	{
		id: "get-todos", // id of the route
		url: "/api/todos", // url in path-to-regexp format
		method: "GET", // HTTP method
		variants: [
			{
				id: "success", // id of the variant
				type: "json", // variant type
				options: {
					status: 200,
					body: todos
				}
			}
		]
	},
	{
		id: "get-todos-paginated", // id of the route
		url: "/api/todos/paginated", // url in path-to-regexp format
		method: "POST", // HTTP method
		variants: [
			{
				id: "success", // id of the variant
				type: "middleware", // variant type
				options: {
					middleware: (req, res, next, core) => {
						core.logger.info("Request received!")
						const { pageNumber, pageSize } = req.body

						const todoRes = {
							data: todos.slice((pageNumber - 1) * pageSize, pageNumber * pageSize),
							pagination: {
								pageNumber,
								pageSize,
								pagesCount: Math.ceil(todos.length / pageSize),
								itemsCount: todos.length
							}
						}

						res.status(200)
						res.send(todoRes)
					}
				}
			}
		]
	},
	{
		id: "get-todo", // id of the route
		url: "/api/todos/:id", // url in path-to-regexp format
		method: "GET", // HTTP method
		variants: [
			{
				id: "success", // id of the variant
				type: "middleware", // variant type
				options: {
					middleware: (req, res, next, core) => {
						core.logger.info("Request received!")
						const { id } = req.params

						const todoRes = todos.find((todo) => todo.id === parseInt(id))

						if (!todoRes) {
							return res.status(404).send({ error: "Todo not found" })
						}

						res.status(200)
						res.send(todoRes)
					}
				}
			}
		]
	},
	{
		id: "create-todo", // id of the route
		url: "/api/todos", // url in path-to-regexp format
		method: ["POST"], // HTTP methods
		variants: [
			{
				id: "success", // id of the variant
				type: "middleware", // variant type
				options: {
					middleware: (req, res, next, core) => {
						core.logger.info("Request received!")
						const body = req.body
						console.log("🚀 ~ body:", body)

						const newTodo: Todo = {
							...body,
							id: Math.max(...todos.map((todo) => todo.id)) + 1,
							createdAt: new Date(),
							updatedAt: new Date()
						}

						todos.push(newTodo)

						res.status(201)
						res.send(newTodo)
					}
				}
			}
		]
	},
	{
		id: "update-todo", // id of the route
		url: "/api/todos/:id", // url in path-to-regexp format
		method: ["PATCH", "PUT"], // HTTP methods
		variants: [
			{
				id: "success", // id of the variant
				type: "middleware", // variant type
				options: {
					middleware: (req, res, next, core) => {
						core.logger.info("Request received!")
						const { id } = req.params
						const body = req.body

						const todoIndex = todos.findIndex((todo) => todo.id === parseInt(id))

						if (todoIndex === -1) {
							res.status(404)
							res.send({ error: "Todo not found" })
							return
						}

						todos[todoIndex] = { ...todos[todoIndex], ...body, updatedAt: new Date() }

						res.status(200)
						res.send(todos[todoIndex])
					}
				}
			}
		]
	},
	{
		id: "delete-todo", // id of the route
		url: "/api/todos/:id", // url in path-to-regexp format
		method: ["DELETE"], // HTTP methods
		variants: [
			{
				id: "success", // id of the variant
				type: "middleware", // variant type
				options: {
					middleware: (req, res, next, core) => {
						core.logger.info("Request received!")
						const { id } = req.params

						const todoIndex = todos.findIndex((todo) => todo.id === parseInt(id))

						if (todoIndex === -1) {
							res.status(404)
							res.send({ error: "Todo not found" })
							return
						}

						todos.splice(todoIndex, 1)

						res.status(200).send()
					}
				}
			}
		]
	}
]

export default routes
