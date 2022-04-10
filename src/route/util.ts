import { Response, Router } from 'express';
import { format, getUnixTime } from 'date-fns';
import { components } from '../../types/schema';

export const router = Router();
const dayList = [ '日', '月', '火', '水', '木', '金', '土' ];

router.get('/now', (_, res: Response<components['schemas']['DateTime']>) => {
	const now = new Date();

	res.type('json');
	res.send({
		datetime: format(now, 'yyyy/MM/dd HH:mm:ss'),
		offset: format(now, "yyyy-MM-dd'T'HH:mm:ssxxx"),
		calender: format(now, 'yyyy-MM-dd'),
		timestamp: getUnixTime(now),
		year: now.getUTCFullYear(),
		month: now.getMonth() + 1,
		date: now.getDate(),
		day: dayList[now.getDay()],
		hour: now.getHours(),
		minute: now.getMinutes(),
		second: now.getSeconds(),
	});
});
