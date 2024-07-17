import {PhantomReified, PhantomToTypeStr, PhantomTypeArgument, Reified, StructClass, ToField, ToPhantomTypeArgument, ToTypeStr, assertFieldsWithTypesArgsMatch, assertReifiedTypeArgsMatch, decodeFromFields, decodeFromFieldsWithTypes, decodeFromJSONField, extractType, phantom} from "../../../../_framework/reified";
import {FieldsWithTypes, composeSuiType, compressSuiType} from "../../../../_framework/util";
import {PKG_V1} from "../index";
import {bcs, fromB64} from "@mysten/bcs";
import {SuiClient, SuiParsedData} from "@mysten/sui/client";

/* ============================== Rule =============================== */

export function isRule(type: string): boolean { type = compressSuiType(type); return type.startsWith(`${PKG_V1}::witness_rule::Rule` + '<'); }

export interface RuleFields<Proof extends PhantomTypeArgument> { dummyField: ToField<"bool"> }

export type RuleReified<Proof extends PhantomTypeArgument> = Reified< Rule<Proof>, RuleFields<Proof> >;

export class Rule<Proof extends PhantomTypeArgument> implements StructClass { static readonly $typeName = `${PKG_V1}::witness_rule::Rule`; static readonly $numTypeParams = 1;

 readonly $typeName = Rule.$typeName;

 readonly $fullTypeName: `${typeof PKG_V1}::witness_rule::Rule<${PhantomToTypeStr<Proof>}>`;

 readonly $typeArgs: [PhantomToTypeStr<Proof>];

 readonly dummyField: ToField<"bool">

 private constructor(typeArgs: [PhantomToTypeStr<Proof>], fields: RuleFields<Proof>, ) { this.$fullTypeName = composeSuiType( Rule.$typeName, ...typeArgs ) as `${typeof PKG_V1}::witness_rule::Rule<${PhantomToTypeStr<Proof>}>`; this.$typeArgs = typeArgs;

 this.dummyField = fields.dummyField; }

 static reified<Proof extends PhantomReified<PhantomTypeArgument>>( Proof: Proof ): RuleReified<ToPhantomTypeArgument<Proof>> { return { typeName: Rule.$typeName, fullTypeName: composeSuiType( Rule.$typeName, ...[extractType(Proof)] ) as `${typeof PKG_V1}::witness_rule::Rule<${PhantomToTypeStr<ToPhantomTypeArgument<Proof>>}>`, typeArgs: [ extractType(Proof) ] as [PhantomToTypeStr<ToPhantomTypeArgument<Proof>>], reifiedTypeArgs: [Proof], fromFields: (fields: Record<string, any>) => Rule.fromFields( Proof, fields, ), fromFieldsWithTypes: (item: FieldsWithTypes) => Rule.fromFieldsWithTypes( Proof, item, ), fromBcs: (data: Uint8Array) => Rule.fromBcs( Proof, data, ), bcs: Rule.bcs, fromJSONField: (field: any) => Rule.fromJSONField( Proof, field, ), fromJSON: (json: Record<string, any>) => Rule.fromJSON( Proof, json, ), fromSuiParsedData: (content: SuiParsedData) => Rule.fromSuiParsedData( Proof, content, ), fetch: async (client: SuiClient, id: string) => Rule.fetch( client, Proof, id, ), new: ( fields: RuleFields<ToPhantomTypeArgument<Proof>>, ) => { return new Rule( [extractType(Proof)], fields ) }, kind: "StructClassReified", } }

 static get r() { return Rule.reified }

 static phantom<Proof extends PhantomReified<PhantomTypeArgument>>( Proof: Proof ): PhantomReified<ToTypeStr<Rule<ToPhantomTypeArgument<Proof>>>> { return phantom(Rule.reified( Proof )); } static get p() { return Rule.phantom }

 static get bcs() { return bcs.struct("Rule", {

 dummy_field: bcs.bool()

}) };

 static fromFields<Proof extends PhantomReified<PhantomTypeArgument>>( typeArg: Proof, fields: Record<string, any> ): Rule<ToPhantomTypeArgument<Proof>> { return Rule.reified( typeArg, ).new( { dummyField: decodeFromFields("bool", fields.dummy_field) } ) }

 static fromFieldsWithTypes<Proof extends PhantomReified<PhantomTypeArgument>>( typeArg: Proof, item: FieldsWithTypes ): Rule<ToPhantomTypeArgument<Proof>> { if (!isRule(item.type)) { throw new Error("not a Rule type");

 } assertFieldsWithTypesArgsMatch(item, [typeArg]);

 return Rule.reified( typeArg, ).new( { dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field) } ) }

 static fromBcs<Proof extends PhantomReified<PhantomTypeArgument>>( typeArg: Proof, data: Uint8Array ): Rule<ToPhantomTypeArgument<Proof>> { return Rule.fromFields( typeArg, Rule.bcs.parse(data) ) }

 toJSONField() { return {

 dummyField: this.dummyField,

} }

 toJSON() { return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() } }

 static fromJSONField<Proof extends PhantomReified<PhantomTypeArgument>>( typeArg: Proof, field: any ): Rule<ToPhantomTypeArgument<Proof>> { return Rule.reified( typeArg, ).new( { dummyField: decodeFromJSONField("bool", field.dummyField) } ) }

 static fromJSON<Proof extends PhantomReified<PhantomTypeArgument>>( typeArg: Proof, json: Record<string, any> ): Rule<ToPhantomTypeArgument<Proof>> { if (json.$typeName !== Rule.$typeName) { throw new Error("not a WithTwoGenerics json object") }; assertReifiedTypeArgsMatch( composeSuiType(Rule.$typeName, extractType(typeArg)), json.$typeArgs, [typeArg], )

 return Rule.fromJSONField( typeArg, json, ) }

 static fromSuiParsedData<Proof extends PhantomReified<PhantomTypeArgument>>( typeArg: Proof, content: SuiParsedData ): Rule<ToPhantomTypeArgument<Proof>> { if (content.dataType !== "moveObject") { throw new Error("not an object"); } if (!isRule(content.type)) { throw new Error(`object at ${(content.fields as any).id} is not a Rule object`); } return Rule.fromFieldsWithTypes( typeArg, content ); }

 static async fetch<Proof extends PhantomReified<PhantomTypeArgument>>( client: SuiClient, typeArg: Proof, id: string ): Promise<Rule<ToPhantomTypeArgument<Proof>>> { const res = await client.getObject({ id, options: { showBcs: true, }, }); if (res.error) { throw new Error(`error fetching Rule object at id ${id}: ${res.error.code}`); } if (res.data?.bcs?.dataType !== "moveObject" || !isRule(res.data.bcs.type)) { throw new Error(`object at id ${id} is not a Rule object`); }
 return Rule.fromBcs( typeArg, fromB64(res.data.bcs.bcsBytes) ); }

 }
