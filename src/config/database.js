module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'joao123456',
  database: 'tasklist',
  define: {
    timestamps:true,
    underscored: true,
    underscoredAll: true,
  },
};