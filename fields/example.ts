
// import field interface
import { Field } from '@dashup/module';

/**
 * build address helper
 */
export default class ExampleField extends Field {

  /**
   * returns field type
   */
  static get type() {
    // return field type label
    return 'type';
  }

  /**
   * returns field data
   */
  static get data() {
    // return field data
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
   * returns category list for field
   */
  static get categories() {
    // return array of categories
    return ['frontend'];
  }

  /**
   * returns field descripton for list
   */
  static get description() {
    // return description string
    return 'Field Descripton';
  }
}