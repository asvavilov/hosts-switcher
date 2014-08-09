// FIXME move IP to settings
// TODO move hosts filename to settings

var fs = require('fs');

var file_name = "c:\\windows\\system32\\drivers\\etc\\hosts";

var file_get_contents = function(file_name){
	var file_content = fs.readFileSync(file_name, {'encoding': 'utf-8'});
	if (!file_content)
	{
		process.exit(1);
	}
	return file_content;
};

var file_put_contents = function(file_name, file_content){
	fs.writeFileSync(file_name, file_content);
}

exports.toLocal = function(){
	var file_content = file_get_contents(file_name);
	var new_file_content = file_content.replace(/^#(192\.168\.0\.100\s+.+)$/gm, '$1');
	file_put_contents(file_name, new_file_content);
	console.log(new_file_content);
};
exports.toGlobal = function(){
	var file_content = file_get_contents(file_name);
	var new_file_content = file_content.replace(/^(192\.168\.0\.100\s+.+)$/gm, '#$1');
	file_put_contents(file_name, new_file_content);
	console.log(new_file_content);
};
