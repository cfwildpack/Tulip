class Tulip:
    def __init__(self, height=10):
        self.height = height
        self.days = 0
        self.is_blooming = False

    def grow(self, sunlight_hours):
        if sunlight_hours >= 6:
            self.height += 2
        else:
            self.height += 1
        self.days += 1

        if self.days >= 7:
            self.is_blooming = True

    def status(self):
        print(f"Height: {self.height} cm")
        print(f"Days grown: {self.days}")
        print(f"Blooming: {self.is_blooming}")

if __name__ == "__main__":
    tulip = Tulip()
    tulip.grow(7)
    tulip.status()
