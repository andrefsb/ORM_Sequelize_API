module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Matriculas', [
			{
				status: "confirmado",
				estudante_id: 1,
				turma_id: 1,
				createdAt: new Date(),
				updatedAt: new Date()
		},
		{
			status: "confirmado",
			estudante_id: 10,
			turma_id: 1,
			createdAt: new Date(),
			updatedAt: new Date()
	},
		{
			status: "confirmado",
			estudante_id: 11,
			turma_id: 2,
			createdAt: new Date(),
			updatedAt: new Date()
	},
		{
			status: "confirmado",
			estudante_id: 12,
			turma_id: 3,
			createdAt: new Date(),
			updatedAt: new Date()
	},
		{
			status: "cancelado",
			estudante_id: 1,
			turma_id: 2,
			createdAt: new Date(),
			updatedAt: new Date()
	},
		{
			status: "cancelado",
			estudante_id: 13,
			turma_id: 2,
			createdAt: new Date(),
			updatedAt: new Date()
		}
		], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Matriculas', null, {})
  }
}
