
// import connect interface
import { Connect } from '@dashup/module';

/**
 * build address helper
 */
export default class ExampleConnect extends Connect {

  /**
   * returns connect type
   */
  static get type() {
    // return connect type label
    return 'type';
  }

  /**
   * returns connect data
   */
  static get data() {
    // return connect data
    return {};
  }

  /**
   * returns object of views
   */
  static get views() {
    // return object of views
    return {
      view   : '/path/to/file',
      input  : '/path/to/file',
      config : '/path/to/file',
    };
  }

  /**
   * returns category list for connect
   */
  static get categories() {
    // return array of categories
    return ['frontend'];
  }

  /**
   * returns connect descripton for list
   */
  static get description() {
    // return description string
    return 'Connect Descripton';
  }
}