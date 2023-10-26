package com.airline.services;

import java.math.BigInteger;

import org.springframework.http.ResponseEntity;

import com.airline.entity.Flight;

public interface FlightService {
	public ResponseEntity<?> addFlight(Flight flight);

	public Iterable<Flight> viewAllFlight();

	public Flight viewFlight(BigInteger flightNo);

	public Flight modifyFlight(Flight flight);

	public String removeFlight(BigInteger flightNo);

}
