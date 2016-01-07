function hello01(){
	return "Hello World";
}

function hello02(){
	return 12;
}

function hello03(){
	return true;
}

function getInstances(){
	return {
		"servers" : [{"name" : "Dummy Server", "os" : "Windows"},{"name" : "Production", "os" : "SUSE Linux"},{"name" : "Development Server", "os" : "CentOS"},{"name" : "Testing", "os" : "Unix"},{"name" : "Production Server", "os" : "Ubuntu"}]
	}
}

describe("basic testing",function(){
	
	it("of return type",function(){
		expect(hello01()).toEqual("Hello World");
		expect(hello02()).toEqual("Hello World !");
		expect(hello03()).toEqual(false);
	});

	it("hello2 returns which type",function(){
		expect(hello02()).toEqual(jasmine.any(String));
	});
});

describe("Instance API",function(){
	it("should return object",function(){
		expect(getInstances()).toEqual(jasmine.any(Object));
	});
	
	it("returned object should contain property 'servers'",function(){
		expect(getInstances().servers).toBeDefined();
	});
	
	it("returned object.servers should be of type array",function(){
		expect(getInstances().servers).toEqual(jasmine.any(Array));
	});
	
	if(getInstances().servers.length > 0){

		it("which returns array of server object. Each object contains property 'name'",function(){
			expect(getInstances().servers[0].name).toBeDefined();		
		});

		it("server.name should be of type string",function(){
			expect(getInstances().servers[0].name).toEqual(jasmine.any(String));		
		});
		
		it("which returns array of server object. Each object contains property 'os'",function(){
			expect(getInstances().servers[0].os).toBeDefined();		
		});

		it("server.os should be of type string",function(){
			expect(getInstances().servers[0].os).toEqual(jasmine.any(String));		
		});
		
		it("which returns array of server object should contain property 'devices' ",function(){
			expect(getInstances().servers[0]).toContain("devices");		
		});
	}
});
