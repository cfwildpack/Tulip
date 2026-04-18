package main

import "fmt"

func calculateWater(days int, waterPerDay int) int {
	return days * waterPerDay
}

func main() {
	total := calculateWater(7, 70)
	fmt.Printf("Total water needed this week: %d ml\n", total)
}
