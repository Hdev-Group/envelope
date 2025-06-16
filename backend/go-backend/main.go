// Main go backend file for Envelope
package main

import (
	"fmt"
	"net/http"
)

func main() {
	fmt.Println("Starting Envelope Backend...")

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Welcome to the Envelope!")
	})

	if err := http.ListenAndServe(":3001", nil); err != nil {
		fmt.Printf("Error starting server: %s\n", err)
	}
}
