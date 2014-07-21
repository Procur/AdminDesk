module.exports.api = {
  host: 'http://localhost:1337',

  parse: function parse(response){
            return JSON.parse(response.entity);
          }
};
