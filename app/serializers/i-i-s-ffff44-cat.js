import { Serializer as CatSerializer } from
  '../mixins/regenerated/serializers/i-i-s-ffff44-cat';
import AnimalSerializer from './i-i-s-ffff44-animal';

export default AnimalSerializer.extend(CatSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
