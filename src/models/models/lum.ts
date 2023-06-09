import { Expose } from 'class-transformer';

export class LumModel {
    @Expose()
    price?: number;

    @Expose()
    denom?: string;

    @Expose()
    symbol?: string;

    @Expose()
    liquidity?: number;

    @Expose({ name: 'volume_24h' })
    volume24h?: number;

    @Expose()
    name?: number;

    @Expose({ name: 'previous_day_price' })
    previousDayPrice?: number;
}

export default LumModel;
