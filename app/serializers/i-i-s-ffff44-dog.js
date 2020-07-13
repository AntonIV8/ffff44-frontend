import { Serializer as DogSerializer } from
  '../mixins/regenerated/serializers/i-i-s-ffff44-dog';
import AnimalSerializer from './i-i-s-ffff44-animal';

export default AnimalSerializer.extend(DogSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
