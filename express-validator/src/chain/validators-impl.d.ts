import { CustomValidator } from '../base';
import { ContextBuilder } from '../context-builder';
import * as Options from '../options';
import { Validators } from './validators';
export declare class ValidatorsImpl<Chain> implements Validators<Chain> {
    private readonly builder;
    private readonly chain;
    private lastValidator;
    private negateNext;
    constructor(builder: ContextBuilder, chain: Chain);
    private addItem;
    not(): Chain;
    withMessage(message: any): Chain;
    custom(validator: CustomValidator): Chain;
    exists(options?: {
        checkFalsy?: boolean;
        checkNull?: boolean;
    }): Chain;
    isArray(options?: {
        min?: number;
        max?: number;
    }): Chain;
    isObject(options?: {
        strict?: boolean;
    }): Chain;
    isString(): Chain;
    notEmpty(options?: Options.IsEmptyOptions): Chain;
    private addStandardValidation;
    contains(elem: any, options?: Options.ContainsOptions): Chain;
    equals(comparison: string): Chain;
    isAfter(date?: string): Chain;
    isAlpha(locale?: Options.AlphaLocale, options?: Options.IsAlphaOptions): Chain;
    isAlphanumeric(locale?: Options.AlphanumericLocale, options?: Options.IsAlphanumericOptions): Chain;
    isAscii(): Chain;
    isBase32(): Chain;
    isBase58(): Chain;
    isBase64(options?: Options.IsBase64Options): Chain;
    isBefore(date?: string): Chain;
    isBIC(): Chain;
    /**
     * There are basically three levels of strictness for this validator.
     * Passing `{ strict: true }` as option only passes the validation if the value is a JS bool. (It also overrides the loose property of the options).
     * Passing `{ loose: true|false }` along with no `strict` prop of with `strict` falsy follows the behaviour specified in validator.js docs.
     */
    isBoolean(options?: Options.IsBooleanOptions): Chain;
    isBtcAddress(): Chain;
    isByteLength(options: Options.MinMaxOptions): Chain;
    isCreditCard(): Chain;
    isCurrency(options?: Options.IsCurrencyOptions): Chain;
    isDataURI(): Chain;
    isDate(options?: Options.IsDateOptions): Chain;
    isDecimal(options?: Options.IsDecimalOptions): Chain;
    isDivisibleBy(number: number): Chain;
    isEAN(): Chain;
    isEmail(options?: Options.IsEmailOptions): Chain;
    isEmpty(options?: Options.IsEmptyOptions): Chain;
    isEthereumAddress(): Chain;
    isFQDN(options?: Options.IsFQDNOptions): Chain;
    isFloat(options?: Options.IsFloatOptions): Chain;
    isFullWidth(): Chain;
    isHalfWidth(): Chain;
    isHash(algorithm: Options.HashAlgorithm): Chain;
    isHexColor(): Chain;
    isHexadecimal(): Chain;
    isHSL(): Chain;
    isIBAN(): Chain;
    isIdentityCard(locale: Options.IdentityCardLocale): Chain;
    isIMEI(options?: Options.IsIMEIOptions): Chain;
    isIP(version?: Options.IPVersion): Chain;
    isIPRange(version?: Options.IPVersion): Chain;
    isISBN(version?: number): Chain;
    isISSN(options?: Options.IsISSNOptions): Chain;
    isISIN(): Chain;
    isISO8601(options?: Options.IsISO8601Options): Chain;
    isISO31661Alpha2(): Chain;
    isISO31661Alpha3(): Chain;
    isISO4217(): Chain;
    isISRC(): Chain;
    isIn(values: readonly any[]): Chain;
    isInt(options?: Options.IsIntOptions): Chain;
    isJSON(options?: Options.IsJSONOptions): Chain;
    isJWT(): Chain;
    isLatLong(options?: Options.IsLatLongOptions): Chain;
    isLength(options: Options.MinMaxOptions): Chain;
    isLicensePlate(locale: Options.IsLicensePlateLocale): Chain;
    isLocale(): Chain;
    isLowercase(): Chain;
    isMagnetURI(): Chain;
    isMACAddress(options?: Options.IsMACAddressOptions): Chain;
    isMD5(): Chain;
    isMimeType(): Chain;
    isMobilePhone(locale: Options.MobilePhoneLocale | readonly Options.MobilePhoneLocale[], options?: Options.IsMobilePhoneOptions): Chain;
    isMongoId(): Chain;
    isMultibyte(): Chain;
    isNumeric(options?: Options.IsNumericOptions): Chain;
    isOctal(): Chain;
    isPassportNumber(countryCode?: Options.PassportCountryCode): Chain;
    isPort(): Chain;
    isPostalCode(locale: Options.PostalCodeLocale): Chain;
    isRFC3339(): Chain;
    isRgbColor(includePercentValues?: boolean): Chain;
    isSemVer(): Chain;
    isSlug(): Chain;
    isStrongPassword(options?: Options.IsStrongPasswordOptions): Chain;
    isSurrogatePair(): Chain;
    isTaxID(locale: Options.TaxIDLocale): Chain;
    isURL(options?: Options.IsURLOptions): Chain;
    isUUID(version?: Options.UUIDVersion): Chain;
    isUppercase(): Chain;
    isVariableWidth(): Chain;
    isVAT(countryCode: Options.VATCountryCode): Chain;
    isWhitelisted(chars: string | readonly string[]): Chain;
    matches(pattern: RegExp | string, modifiers?: string): Chain;
}
