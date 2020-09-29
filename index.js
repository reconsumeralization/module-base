
// import base
const { Module } = require('@dashup/module');

/**
 * export module
 */
class CoreModule extends Module {
  
  /**
   * Register all page interfaces here
   * 
   * ```
   * // register page class
   * register(Page);
   * ```
   * 
   * Class `Page` should extend `require('@dashup/module').Page`
   * 
   * @param {Function} register 
   */
  pages(register) {
    
  }
  
  /**
   * Register all field interfaces here
   * 
   * ```
   * // register field class
   * register(Field);
   * ```
   * 
   * Class `Field` should extend `require('@dashup/module').Field`
   * 
   * @param {Function} register 
   */
  fields(register) {
    
  }
  
  /**
   * Register all action interfaces here
   * 
   * ```
   * // register action class
   * register(Action);
   * ```
   * 
   * Class `Action` should extend `require('@dashup/module').Action`
   * 
   * @param {Function} register 
   */
  actions(register) {
    
  }
  
  /**
   * Register all trigger interfaces here
   * 
   * ```
   * // register trigger class
   * register(Trigger);
   * ```
   * 
   * Class `Trigger` should extend `require('@dashup/module').Trigger`
   * 
   * @param {Function} register 
   */
  triggers(register) {
    
  }
  
  /**
   * Register all connect interfaces here
   * 
   * ```
   * // register connect class
   * register(Connect);
   * ```
   * 
   * Class `Connect` should extend `require('@dashup/module').Connect`
   * 
   * @param {Function} register 
   */
  connects(register) {
    
  }
}

// create new
module.exports = new CoreModule();
