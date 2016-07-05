module.exports = function(){
	var config = {
		//ts files we are gonna use, TS only?
		allTs: './src/**/*.ts',

		unitTests: './tests/unit-tests/*.ts',
		//output path to where all compile ts files will be transpiled
		tsOutputPath: './dev/',

		testOutput: './tests/unit-tests/',

		typings: './typings/**/*.ts'
	}
	return config;
}