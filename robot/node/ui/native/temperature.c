#include <pigpio.h>
#include <stdint.h>
#include "temperature.h"
// http://www.uugear.com/portfolio/read-dht1122-temperature-humidity-sensor-from-raspberry-pi/
int data[5] = { 0, 0, 0, 0, 0 };
int readTemperature(){
    uint8_t laststate	= HIGH;
    uint8_t counter		= 0;
    uint8_t j			= 0, i;

    data[0] = data[1] = data[2] = data[3] = data[4] = 0;

    gpioSetMode( OUTPUT_PIN, PI_OUTPUT);
    gpioWrite( OUTPUT_PIN, 0 );
    delay( 18 );
    pinMode( OUTPUT_PIN, PI_INPUT );
    for ( i = 0; i < MAX_TIMINGS; i++ ) {
		counter = 0;
		while ( gpioRead( OUTPUT_PIN ) == laststate )
		{
			counter++;
			delayMicroseconds( 1 );
			if ( counter == 255 )
			{
				break;
			}
		}
		laststate = gpioRead( OUTPUT_PIN );

		if ( counter == 255 )
			break;

		/* ignore first 3 transitions */
		if ( (i >= 4) && (i % 2 == 0) )
		{
			/* shove each bit into the storage bytes */
			data[j / 8] <<= 1;
			if ( counter > 16 )
				data[j / 8] |= 1;
			j++;
		}
	}
}