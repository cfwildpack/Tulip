#include <iostream>
using namespace std;

class BloomEngine {
public:
    void simulateBloom(int days) {
        if (days >= 7) {
            cout << "The tulip is blooming beautifully!" << endl;
        } else {
            cout << "The tulip is still growing." << endl;
        }
    }
};

int main() {
    BloomEngine engine;
    engine.simulateBloom(10);
    return 0;
}
