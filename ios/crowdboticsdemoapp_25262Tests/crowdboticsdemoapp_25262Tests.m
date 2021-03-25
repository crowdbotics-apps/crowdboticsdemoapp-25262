#import <UIKit/UIKit.h>
#import <XCTest/XCTest.h>

#import <React/RCTLog.h>
#import <React/RCTRootView.h>

#define TIMEOUT_SECONDS 600
#define TEXT_TO_LOOK_FOR @"Welcome to React"

@interface crowdboticsdemoapp_25262 : XCTestCase

@end

@implementation crowdboticsdemoapp_25262

- (BOOL)findSubviewInView:(UIView *)view matching:(BOOL(^)(UIView *view))test
{
  if (test(view)) {
    return YES;
  }
  for (UIView *subview in [view subviews]) {
    if ([self findSubviewInView:subview matching:test]) {
      return YES;
    }
  }
  return NO;
}


@end
