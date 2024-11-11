const todosList = [{ id: '1', title: 'Todo 1', description: 'Todo 1 description', completed: true, createdAt: new Date() }]

const todoPaginated = {
	data: [
		{
			id: 8,
			title: 'task 8',
			description: 'description',
			completed: true,
			createdAt: '2024-09-30T20:59:43.328Z',
			updatedAt: '2024-10-07T19:50:40.503Z'
		},
		{
			id: 19,
			title: 'new task',
			description: 'default',
			completed: true,
			createdAt: '2024-10-07T19:53:46.112Z',
			updatedAt: '2024-10-07T19:54:01.713Z'
		},
		{
			id: 3,
			title: 'task 3',
			description: 'default',
			completed: true,
			createdAt: '2024-09-30T20:59:39.758Z',
			updatedAt: '2024-10-07T19:54:03.895Z'
		},
		{
			id: 4,
			title: 'task 4',
			description: 'description',
			completed: true,
			createdAt: '2024-09-30T20:59:40.501Z',
			updatedAt: '2024-10-07T19:55:25.720Z'
		},
		{
			id: 5,
			title: 'task 5',
			description: 'description',
			completed: true,
			createdAt: '2024-09-30T20:59:40.501Z',
			updatedAt: '2024-10-07T19:55:25.720Z'
		},
		{
			id: 6,
			title: 'task 6',
			description: 'description',
			completed: true,
			createdAt: '2024-09-30T20:59:40.501Z',
			updatedAt: '2024-10-07T19:55:25.720Z'
		}
	],
	pagination: {
		pageNumber: 1,
		pageSize: 5,
		pagesCount: 2,
		itemsCount: 6
	}
}

module.exports = [
	{
		id: 'get-todos', // id of the route
		url: '/api/todos', // url in path-to-regexp format
		method: 'GET', // HTTP method
		variants: [
			{
				id: 'success', // id of the variant
				type: 'json', // variant type
				options: {
					status: 200,
					body: todosList
				}
			}
		]
	},
	{
		id: 'get-todos-paginated', // id of the route
		url: '/api/todos/paginated', // url in path-to-regexp format
		method: 'POST', // HTTP method
		variants: [
			{
				id: 'success', // id of the variant
				type: 'middleware', // variant type
				options: {
					middleware: (req, res, next, core) => {
						core.logger.info('Request received!')
						const body = req.body
						const { pageNumber, pageSize } = body

						const todoRes = {
							data: todoPaginated.data.slice((pageNumber - 1) * pageSize, pageNumber * pageSize),
							pagination: {
								pageNumber,
								pageSize,
								pagesCount: Math.ceil(todoPaginated.data.length / pageSize),
								itemsCount: todoPaginated.data.length
							}
						}

						console.log(req.body)
						res.status(200)
						res.send(todoRes)
					}
				}
			}
		]
	},
	{
		id: 'modify-todo', // id of the route
		url: '/api/todos/:id', // url in path-to-regexp format
		method: ['PATCH', 'PUT'], // HTTP methods
		variants: [
			{
				id: 'success', // id of the variant
				type: 'json', // variant type
				options: {
					status: 200,
					body: todosList[0]
				}
			}
		]
	}
]
