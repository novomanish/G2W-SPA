const ENUM = {
  DEV: 'dev',
  PROD: 'production'
}
  
var env = null;

module.exports = {
  ENUM,
  get value(){
    if(!env){
      env = process.env.NODE_ENV;

      /**
       * Defaulting env to dev
       */
      if(!Object.values(ENUM).includes(env)){
        
        console.info('Environment NOT set, Defaulting to dev');

        env = ENUM.DEV;
      }
    }
    return env;
  }
}
