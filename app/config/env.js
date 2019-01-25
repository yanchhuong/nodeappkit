const env = {
	  database: 'd2vh533fdpu847',
	  username: 'dwuysfblzohfoj',
	  password: '79506912b6996d87b5f62fa168948ff3f5fefe53e4ac6e6c9ecfc77e4302cefb',
	  host: 'ec2-54-243-223-245.compute-1.amazonaws.com',
	  port: 5432,
	  dialect: 'postgres',
	  pool: {
		  	  max: 5,
		  	  min: 0,
		  	  acquire: 30000,
		  	  idle: 10000
		    }
};
 
module.exports = env;
