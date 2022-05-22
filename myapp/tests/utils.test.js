const {getResourceNameFromPath, returnInsertSintaxFromObj, returnUpdateSintaxFromObj} = require("../src/utils/");

describe("tests for utils", () => {
	it("should return resource without /", () => {
		expect(getResourceNameFromPath("resource/")).toEqual("resource");
	});

	it("should return expected insert sintax for MySQL from JSON object", () => {
		const obj = {
			"roomId": 1,
			"name": "myTestName",
			"active": false
		};

		expect(returnInsertSintaxFromObj("test", obj)).toEqual("INSERT INTO test (roomId,name,active) VALUES (?,?,?)"); 
	});

	it("should return expected update sintax for MySQL from JSON object", () => {
		const obj = {
			"roomId": 1,
			"name": "myTestName",
			"active": false
		};

		expect(returnUpdateSintaxFromObj("test", obj)).toEqual("UPDATE test SET roomId=?,name=?,active=? WHERE id=?"); 
	});
});