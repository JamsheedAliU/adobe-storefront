<<<<<<< HEAD
import { ReCaptchaV3InitProps, ReCaptchaV3ModifyProps } from '../types/recaptcha.types';

declare const getConfigStorage: (storageKey: string, retries?: number, delay?: number) => Promise<ReCaptchaV3ModifyProps | null>;
declare const setConfigStorage: (storageKey: string, config: ReCaptchaV3InitProps, logger: boolean) => null | undefined;
=======
import { ReCaptchaV3Model } from '../types/recaptcha.types';

declare const getConfigStorage: (storageKey: string, retries?: number, delay?: number) => Promise<ReCaptchaV3Model | null>;
declare const setConfigStorage: (storageKey: string, config: ReCaptchaV3Model, logger: boolean) => null | undefined;
>>>>>>> template/main
export { getConfigStorage, setConfigStorage };
//# sourceMappingURL=_storageConfig.d.ts.map